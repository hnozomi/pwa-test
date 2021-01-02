import React, { useState } from "react";
import { Divider, Header, Table, Button, Confirm } from "semantic-ui-react";

export const Detail = (props) => {
  const [deleteConfirm, setdeleteConfirm] = useState(false);
  const { onDeleteSubscription, onBackHome, arrayDetail } = props;

  const onOpenDeleteConfirm = () => {
    setdeleteConfirm(true)
  }

  const onCloseDeleteConfirm = () => {
    setdeleteConfirm(false)
  }

  return (
    <>
      <Divider horizontal>
        <Header as="h4">詳細画面</Header>
      </Divider>

      <Table definition className="detail">
        <Table.Body className="subscription-detail">
          <Table.Row>
            <Table.Cell width={2}>サブスク名</Table.Cell>
            <Table.Cell>{arrayDetail[2]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>金額</Table.Cell>
            <Table.Cell>{arrayDetail[3]}円</Table.Cell>
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
        </Table.Body>
        <Table.Footer className="del-form-button-wrapper">
          <Table.Row className="del-form-button-wrapper">
            <Table.HeaderCell className="table-pointer">
              <Button
                floated="right"
                onClick={onOpenDeleteConfirm}
                // onClick={() => onDeleteSubscription(arrayDetail[1])}
                className="add-form-button"
              >
                削除
              </Button>
              <Button
                floated="right"
                onClick={onBackHome}
                className="del-form-button"
              >
                戻る
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <Confirm
          open={deleteConfirm}
          content='本当に削除しますよ'
          onCancel={onCloseDeleteConfirm}
          onConfirm={() => onDeleteSubscription(arrayDetail[1])}
        />
    </>
  );
};
