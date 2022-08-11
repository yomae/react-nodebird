import PropTypes from "prop-types";
import Head from "next/head";
// next에서 head를 수정할 수 있는 컴포넌트를 따로 제공
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";

// TODO: 페이지의 공통부는 _app.js에서 관리하자. (pages들의 공통부분)

const Nodebird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Nodebird</title>
      </Head>
      <Component />
    </>
  );
};

Nodebird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(Nodebird);
