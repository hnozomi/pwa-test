import React, { useState } from "react";
import { Input } from "semantic-ui-react";
import {
  Container,
  Divider,
  Header,
  Form,
  Button,
  Radio
} from "semantic-ui-react";

export const Register = (props) => {
  const [inputValue, setChangeValue] = useState("");
  const [inputCost, setChangeCost] = useState("");
  const [inputCycle, setChangeCycle] = useState("");
  const [inputDate, setChangeDate] = useState("");
  const [inputRemark, setChangeRemark] = useState("");

  const { onBackHome, onAddSubscription } = props;

  const onChangeValue = (e) => setChangeValue(e.target.value);
  const onChangeCost = (e) => setChangeCost(e.target.value);
  const onChangeCycle = (e, { value }) => setChangeCycle(value);
  const onChangeDate = (e) => setChangeDate(e.target.value);
  const onChangeRemark = (e) => setChangeRemark(e.target.value);

  return (
    <>
      <Divider horizontal>
        <Header as="h4">
          {/* <Icon name="bar chart" /> */}
          サブスク追加
        </Header>
      </Divider>
      <Container fluid className="add-form-wrapper">
        <Form>
          <Form.Field inline className="add-form">
            <label className="add-form-label">サブスク名</label>
            <Input
              className="add-form-input"
              placeholder="サブスク名"
              onChange={onChangeValue}
            />
            <label className="add-form-label">金額</label>
            <Input
              className="add-form-input"
              placeholder="金額(円)"
              onChange={onChangeCost}
              type="tel"
            />
            <label className="add-form-label">周期</label>
            <div>
              <Radio
                label="1週間  "
                name="radioGroup"
                value="7"
                checked={inputCycle === "7"}
                className="add-form-input add-form-radio"
                onChange={onChangeCycle}
              />
              <Radio
                label="2週間"
                name="radioGroup"
                value="14"
                checked={inputCycle === "14"}
                className="add-form-input add-form-radio"
                onChange={onChangeCycle}
              />
              <Radio
                label="1カ月"
                name="radioGroup"
                value="31"
                checked={inputCycle === "31"}
                className="add-form-input add-form-radio"
                onClick={onChangeCycle}
              />
              <Radio
                label="1年"
                name="radioGroup"
                value="365"
                checked={inputCycle === "365"}
                className="add-form-input add-form-radio"
                onClick={onChangeCycle}
              />
            </div>
            <label className="add-form-label">登録日</label>
            <Input
              className="add-form-input"
              placeholder="登録日"
              type="date"
              onChange={onChangeDate}
            />
            <label className="add-form-label">備考</label>
            <Input
              className="add-form-input"
              placeholder="備考"
              onChange={onChangeRemark}
            />
          </Form.Field>
          <div className="add-form-button-wrapper">
            <Button onClick={onBackHome} className="add-form-button">
              キャンセル
            </Button>
            <Button
              onClick={() =>
                onAddSubscription(
                  inputValue,
                  inputCost,
                  inputDate,
                  inputCycle,
                  inputRemark
                )
              }
              className="add-form-button"
            >
              登録
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};
