function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      {/* <img
        className="rounded-full"
        width={50}
        src="https://links.papareact.com/1m8"
        alt="logo"
      /> */}
      <h1 className="text-lg">
        <span className="text-[#ff5800] text-3xl">e</span>
        <span>nnawi</span>
      </h1>
    </div>
  );
}

export default Logo;
