const PaymentPageBtn = ({ className }) => {
  return (
    <button
      className={`${className}   place-content-center rounded-lg w-full bg-primery text-white transition-all duration-100 hover:scale-[1.02]  md:flex-1 md:rounded-lg`}
    >
      <div className="flex items-center gap-2.5 text-xl font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
        >
          <path
            d="M7.62416 5.63785H21.6242C24.2015 5.63785 26.2908 7.72719 26.2908 10.3045V16.1379C26.2908 18.7152 24.2015 20.8045 21.6242 20.8045H12.2908C9.71349 20.8045 7.62416 18.7152 7.62416 16.1379V5.63785ZM7.62416 5.63785C7.62416 4.34919 6.57949 3.30452 5.29082 3.30452H2.95749"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.62416 6.80452L7.2033 4.27939C7.10954 3.71683 6.62282 3.30452 6.05251 3.30452H2.95749"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M13.4575 24.8879C13.4575 25.8544 12.674 26.6379 11.7075 26.6379C10.741 26.6379 9.95749 25.8544 9.95749 24.8879C9.95749 23.9214 10.741 23.1379 11.7075 23.1379C12.674 23.1379 13.4575 23.9214 13.4575 24.8879Z"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M23.9575 24.8879C23.9575 25.8544 23.174 26.6379 22.2075 26.6379C21.241 26.6379 20.4575 25.8544 20.4575 24.8879C20.4575 23.9214 21.241 23.1379 22.2075 23.1379C23.174 23.1379 23.9575 23.9214 23.9575 24.8879Z"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M19.2908 14.9712L17.7824 16.4796C17.3268 16.9352 16.5881 16.9352 16.1325 16.4796L14.6241 14.9712M16.9575 10.3046V16.1379"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <p>صفحة الدفع</p>
      </div>
    </button>
  );
};
export default PaymentPageBtn;
