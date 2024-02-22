type TitleProps = {
  mainTitle: string;
  subTitle: string;
};

function Title({ mainTitle, subTitle }: TitleProps) {
  return (
    <div className="w-full text-center">
      <h1 className="text-[2rem]">
        <span className="text-primary">{mainTitle}</span> {subTitle}
      </h1>
    </div>
  );
}

export default Title;
