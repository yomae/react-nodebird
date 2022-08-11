import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import Head from "next/head";

const Profile = () => {
  const follwerList = [
    { nickname: "제로초" },
    { nickname: "바보" },
    { nickname: "여매" },
  ];
  const follwingList = [
    { nickname: "제로초" },
    { nickname: "바보" },
    { nickname: "여매" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={follwingList} />
        <FollowList header="팔로워 목록" data={follwerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
