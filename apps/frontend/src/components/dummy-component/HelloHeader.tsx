type Props = {
  name: string;
};

export default function HelloHeader({ name }: Props) {
  return <h1>Hello {name}</h1>;
}
