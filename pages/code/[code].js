import { useRouter } from "next/router";

const Code = () => {
  const router = useRouter();
  const { code } = router.query;
  return <div className="min-h-screen">
      {code}
    </div>;
};

export default Code;
