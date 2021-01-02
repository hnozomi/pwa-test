import React from "react";

import { Button, Icon, Container, Segment } from "semantic-ui-react";

export const Home = (props) => {
  const { onClickSubscription, arraySubscription, arrayTotalCost } = props;

  return (
    <>
      <Container className="subscription-wrapper">
        <Segment className="subscription-total">
          毎月{arrayTotalCost}円支払いがあります
        </Segment>
        {arraySubscription.map((subscription, index) => {
          return (
            <Button
              onClick={() => onClickSubscription(index)}
              className="subscription-area"
              icon
              labelPosition="right"
              key={index}
            >
              <Icon name="angle right" />
              <div className="sucscription-wrapper">
                <p className="sucscription-title" key={index}>
                  {subscription[2]}
                </p>
                <p className="sucscription-cost" key={subscription[0][0]}>
                  {subscription[3]}円
                </p>
              </div>
            </Button>
          );
        })}
      </Container>
    </>
  );
};
