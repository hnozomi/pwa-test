import React from "react";
import { Divider, Header, Table, Button } from "semantic-ui-react";

export const Detail = (props) => {
  const { arrayDetail, onBackHome, onDeleteSubscription } = props;

  // const onDeleteSubscription = (arrayDetail) => {

  //   console.log(arrayDetail[1]);
  // };

  return (
    <>
      <Divider horizontal>
        <Header as="h4">
          {/* <Icon name="bar chart" /> */}
          詳細画面
        </Header>
      </Divider>

      <Table definition className="detail">
        <Table.Body className="subscription-detail">
          <Table.Row>
            <Table.Cell width={2}>サブスク名</Table.Cell>
            <Table.Cell>{arrayDetail[2]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>金額</Table.Cell>
            <Table.Cell>{arrayDetail[3]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>周期</Table.Cell>
            <Table.Cell>{arrayDetail[4]}日</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>登録日</Table.Cell>
            <Table.Cell>{arrayDetail[5]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>メモ</Table.Cell>
            <Table.Cell>{arrayDetail[6]}</Table.Cell>
          </Table.Row>

          {/* <Table.Row className="del-form-button-wrapper">

          <Table.Cell> */}

          {/* <Table.Footer className="del-form-button-wrapper"> */}
          {/* <Table.Row className="del-form-button-wrapper"> */}
          {/* <Table.HeaderCell className="del-form-button-wrapper"> */}

          {/* <div className="del-form-button-wrapper"> */}
          </Table.Body>
          <Table.Footer className="del-form-button-wrapper">
          <Table.Row>
          <Table.HeaderCell>
            <Button
            floated='right'
              onClick={() => onDeleteSubscription(arrayDetail[1])}
              className="add-form-button"
              >
              削除
            </Button>
            <Button floated='right' onClick={onBackHome} className="del-form-button">
              戻る
            </Button>
                </Table.HeaderCell>
              </Table.Row>
                </Table.Footer>
          {/* </div> */}
              {/* </Table.HeaderCell> */}
                {/* </Table.Row> */}
                {/* </Table.Cell>
                </Table.Row> */}
              {/* </Table.Footer> */}
      </Table>
    </>
  );
};
