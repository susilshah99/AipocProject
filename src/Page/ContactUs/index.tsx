import React from "react";
import {
  ContactContainer,
  FormContainer,
  MessageContainer,
  Wrapper,
} from "./components/StyleElements";
import { Typography, Button, Row, Col, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import styled from "@emotion/styled";

const { Title, Text } = Typography;
const { TextArea } = Input;

const MessageButton = styled(Button)`
  height: 45px;
  width: 150px;
  border-radius: 23px;
  font-size: 16px;
  font-weight: 600;
  background-color: black;
  color: red;

  @media screen and (max-width: 768px) {
    margin-bottom: 25px;
  }
`;

const ContactUs = () => {
  const [form] = useForm();
  return (
    <React.Fragment>
      <ContactContainer>
        <FormContainer>
          <Text style={{ fontSize: "2.3rem", fontWeight: 800 }}>
            Let us know how we can help you
          </Text>
          <Wrapper>
            <Form name="basic" layout="vertical" form={form}>
              <Row gutter={[24, 12]}>
                <Col span={12}>
                  <Form.Item>
                    <Input placeholder="Fist Name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Input placeholder="Last Name" />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item>
                    <Input placeholder="Email" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item>
                    <Input placeholder="Company" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Wrapper>
        </FormContainer>

        <MessageContainer>
          <Text style={{ fontSize: "1.8rem", fontWeight: 700 }}>
            Describe your product idea and we will start working on it within 24 hours.
          </Text>
          <Wrapper>
            <TextArea rows={9} />
          </Wrapper>
        </MessageContainer>
      </ContactContainer>
      <div style={{ width: "100%", textAlign: "center", marginTop: "-120px" }}>
        <MessageButton>Send Message</MessageButton>
      </div>
    </React.Fragment>
  );
};
export default ContactUs;
