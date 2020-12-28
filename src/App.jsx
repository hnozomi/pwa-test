import React, { useState, useEffect } from "react";
import "./reset.css";
import "./styles.css";
import { Home } from "./components/Home";
import { Detail } from "./components/Detail";
import { Register } from "./components/Register";
import { Dimmer, Loader, Form, Button, Input } from "semantic-ui-react";

export const App = () => {
  const [subscription, setSubscription] = useState(true);
  const [detail, setDetail] = useState(false);
  const [addsubscription, setAddSubscription] = useState(false);
  const [arraySubscription, setArraySubscription] = useState([]);
  const [arrayDetail, setArrayDetail] = useState();
  const [arrayTotalCost, setTotalCost] = useState(0);
  const [user, setChangeUser] = useState("");
  const [table, setTable] = useState(false);
  const [loading, setloading] = useState(false);
  // const [arraySubscriptions, setArraySubscriptions] = useState([]);
  const arraySubscriptions = [];

  const axios = require("axios").default;

  const onClickGetSubscription = () => {
    setTable(true);
    setloading(true);
    const URL =
      "https://f1j83dq2c6.execute-api.ap-northeast-1.amazonaws.com/default/Subscription";

    const param = {
      command: "get"
    };

    axios.get(URL, { params: param }).then((response) => {
      setArraySubscription(response.data[0]);
      setTotalCost(response.data[1]);
      setloading(false);
    });
  };

  const onClickSubscription = (id) => {
    // console.log(arraySubscription[id - 1]);
    setArrayDetail(arraySubscription[id]);
    setSubscription(false);
    setDetail(true);
  };

  const onBackHome = () => {
    setSubscription(true);
    setAddSubscription(false);
    setDetail(false);
    // console.log(arraySubscription);
  };

  const onDisplayForm = () => {
    setAddSubscription(true);
    setSubscription(false);
    setDetail(false);
  };

  const onAddSubscription = (
    inputValue,
    inputCost,
    inputDate,
    inputCycle,
    inputRemark
  ) => {
    const URL =
      "https://f1j83dq2c6.execute-api.ap-northeast-1.amazonaws.com/default/Subscription";

    const param = {
      command: "add",
      inputValue: inputValue,
      inputCost: inputCost,
      inputDate: inputDate,
      inputCycle: inputCycle,
      inputRemark: inputRemark
    };

    axios.get(URL, { params: param }).then((response) => {
      setArraySubscription(response.data[0]);
    });

    onBackHome();
  };

  const onDeleteSubscription = (subscriptionID) => {
    const URL =
      "https://f1j83dq2c6.execute-api.ap-northeast-1.amazonaws.com/default/Subscription";

    const param = {
      command: "del",
      subscriptionID: subscriptionID
    };

    axios.get(URL, { params: param }).then((response) => {
      setArraySubscription(response.data[0]);
    });

    onBackHome();
  };

  const onChangeUser = (e) => {
    setChangeUser(e.target.value);
  };

  // user: true ⇨ 表示するテーブルIDセット完了。false ⇨ セット未完了
  // loading: true ⇨ データ取得完了。false ⇨ データ取得未完了
  // subscription: true ⇨ ホーム画面(データ取得完了)。false ⇨ ホーム画面以外
  // detail: true ⇨ 詳細画面。false ⇨ 詳細画面以外

  return (
    <>
      <div className="main-header">
        <header onClick={onBackHome} className="main-header-text">
          サブスク管理アプリ
        </header>
        <button onClick={onDisplayForm} className="main-header-add">
          <img alt="追加アイコン" src="/AddIcon.png" />
          {/* <img alt="追加アイコン" src="AddSubscription.svg" /> */}
        </button>
      </div>
      {table || (
        <Dimmer active>
          <Form>
            <Form.Field>
              <label>ユーザーID</label>
              <Input
                className="add-form-input"
                placeholder="サブスク名"
                onChange={onChangeUser}
              />
            </Form.Field>
            <Button onClick={onClickGetSubscription} type="submit">
              Submit
            </Button>
          </Form>
        </Dimmer>
      )}
      {/* &&は、左がtrueの、右側を返す */}
      {/* ||は、左がfalseの、右側を返す */}
      {loading && (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      )}
      {subscription && (
        <Home
          onClickSubscription={onClickSubscription}
          arraySubscription={arraySubscription}
          arrayTotalCost={arrayTotalCost}
        ></Home>
      )}
      {/* {subscription && (
        <Home
          onClickSubscription={onClickSubscription}
          arraySubscription={arraySubscription}
          arrayTotalCost={arrayTotalCost}
        ></Home>
      )} */}
      {detail && (
        <Detail
          arraySubscription={arraySubscription}
          arrayDetail={arrayDetail}
          onDeleteSubscription={onDeleteSubscription}
        ></Detail>
      )}
      {addsubscription && (
        <Register
          onBackHome={onBackHome}
          onAddSubscription={onAddSubscription}
        ></Register>
      )}
    </>
  );
};
