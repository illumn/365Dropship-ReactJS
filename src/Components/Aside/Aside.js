import "./aside.css"
const AsideBar = () => {
  return (
    <>
      <aside className="aside-bar">
        <AsideFilter title={"Choose Niche"} />
        <AsideFilter title={"Choose Category"} light />
        <AsideSelect title={"Ship from"} />
        <AsideSelect title={"Ship to"} />
        <AsideSelect title={"Select supplier"} />
        <Button title={"RESET FILTER"} big />
      </aside>
    </>
  );
};

export default AsideBar;
