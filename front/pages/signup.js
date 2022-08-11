import { useState, useCallback } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import useInput from "../hooks/useInput";
import { Button, Form, Input } from "antd";

const Signup = () => {
  const [id, onChangeId] = useInput("");
  const [nick, onChangeNick] = useInput("");
  const [pwd, onChangePwd] = useInput("");

  const [pwdCheck, setPwdCheck] = useState("");
  const [pwdError, setPwdError] = useState(false);

  const onChangePwdCheck = useCallback(
    (e) => {
      setPwdCheck(e.target.value);
      setPwdError(e.target.value !== pwd);
    },
    [pwd]
  );

  const onSubmit = useCallback(() => {
    if (pwd !== pwdCheck) {
      return setPwdError(true);
    }
  }, [pwd, pwdCheck]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nick}
            required
            onChange={onChangeNick}
          />
        </div>
        <div>
          <label htmlFor="user-pwd">비밀번호</label>
          <br />
          <Input
            name="user-pwd"
            type="password"
            value={pwd}
            required
            onChange={onChangePwd}
          />
        </div>
        <div>
          <label htmlFor="user-pwd-check">비밀번호 체크</label>
          <br />
          <Input
            name="user-pwd-check"
            type="password"
            value={pwdCheck}
            required
            onChange={onChangePwdCheck}
          />
          {pwdError && (
            <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
          )}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
