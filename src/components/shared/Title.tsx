type TitleProps = {
  mainTitle: string;
  subTitle: string;
};

function Title({ mainTitle, subTitle }: TitleProps) {
  return (
    <div className="mb-5 text-center">
      <h1 className="text-2">
        <span className="text-primary">{mainTitle}</span> {subTitle}
      </h1>
    </div>
  );
}

export default Title;
