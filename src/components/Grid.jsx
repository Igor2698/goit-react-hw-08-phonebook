import { Grid } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Grid
        height={80}
        width={80}
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius={12.5}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
