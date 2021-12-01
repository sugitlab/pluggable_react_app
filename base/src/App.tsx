import { useState, useEffect, lazy, Suspense } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [el, setEl] = useState<any>();

  useEffect(() => {
    (async () => {
      const dist = await import("../../plugin/dist");
      setEl(dist);
    })();
  }, [el, setEl]);

  const LazyComp = lazy(() => import("../../plugin2/dist"));

  return (
    <>
      <div>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </div>
      <div>
        <p>Plugin 1</p>
        {el != null ? (
          <el.Plugin
            value={count}
            label="Increment 10 count"
            cb={() => setCount((count) => count + 10)}
          />
        ) : (
          "hoge"
        )}
      </div>
      <div>
        <p>Plugin 2</p>
        <Suspense fallback={<div>waiting...</div>}>
          <LazyComp
            value={count}
            label="decrement 2 count"
            cb={() => {
              setCount((count) => count - 2);
            }}
          />
        </Suspense>
      </div>
    </>
  );
}

export default App;
