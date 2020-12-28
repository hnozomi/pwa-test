import React from "react";
import { Divider, Header, Icon, Table, Button } from "semantic-ui-react";

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
        </Table.Body>
      </Table>
      <Button onClick={onBackHome} className="add-form-button">
        戻る
      </Button>
      <Button
        onClick={() => onDeleteSubscription(arrayDetail[1])}
        className="add-form-button"
      >
        削除
      </Button>
    </>
  );
};
