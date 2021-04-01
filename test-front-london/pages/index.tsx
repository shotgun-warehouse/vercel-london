import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

const Home = ({ uuid }) => {
  const [useEffectFetched, setUseEffectFetched] = useState(false);

  useEffect(() => {
    console.log("fetch_health_use_effect", uuid);
    fetch(`https://test-back-london.shotgun.live/api/health?uuid=${uuid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("fetch_data_use_effect", Boolean(data));
        setUseEffectFetched(Boolean(data));
      })
      .catch((e) => console.error("FUCKING_API_ERROR", "use_effect", e));
  }, []);

  console.log("homepage", uuid);

  return (
    <div>
      Hello
      <br /> uuid: {uuid}
      <br />
      useEffectFetched: {useEffectFetched ? "yes" : "no"}
    </div>
  );
};

Home.getInitialProps = async () => {
  const uuid = v4();

  try {
    console.log("fetch_health", uuid);
    const res = await fetch(
      `https://test-back-london.shotgun.live/api/health?uuid=${uuid}`
    );
    const data = await res.json();
    console.log("fetch_data", Boolean(data));
  } catch (_e) {
    console.error("FUCKING_API_ERROR", _e);
  }

  return {
    uuid,
  };
};

export default Home;
