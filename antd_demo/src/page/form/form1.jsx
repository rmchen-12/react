import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import style from "./style.scss";

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={style.login_form}>
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }],
            label: "aaa"
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="用户名"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="密码"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(
            <Checkbox className={style.login_form_remember}>记住密码</Checkbox>
          )}
          <a className={style.login_form_forgot} href="">
            忘记密码
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className={style.login_form_button}
          >
            登入
          </Button>
          或者 <a href="">注册</a>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(NormalLoginForm);
