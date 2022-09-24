import {TailSpin} from "react-loader-spinner";

const Loader = () => (
    <div className="d-flex justify-content-center align-items-center" style={{height: '500px'}}>
        <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
);

export default Loader;
