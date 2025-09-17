declare module 'react-world-flags' {
  interface FlagProps {
    code: string;
    height?: string | number;
    width?: string | number;
    className?: string;
    style?: React.CSSProperties;
  }

  const Flag: React.ComponentType<FlagProps>;
  export default Flag;
}