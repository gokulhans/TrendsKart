import React from "react";

const HelahPromis = () => {
  return (
    <div className="m-8">
      <h1 className="text-[#2C2C2C] text-[30px] text-center my-6">
        The TrendKart Promise
      </h1>
      <div className="w-full rounded-[20px] bg-[#F6F6F6]">
        <div className="flex flex-wrap justify-around items-center my-3 min-h-[150px]">
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 border-b sm:border-b-0 sm:border-r border-[#BEBEBE] p-4">
            <Icon1 />
            <h1 className="font-Inter text-[20px] mt-2 text-center">
              Fast Delivery
            </h1>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 border-b sm:border-b-0 sm:border-r border-[#BEBEBE] p-4">
            <Icon2 />
            <h1 className="font-Inter text-[20px] mt-2 text-center">
              15 Days Easy Return
            </h1>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 border-b sm:border-b-0 sm:border-r border-[#BEBEBE] p-4">
            <Icon3 />
            <h1 className="font-Inter text-[20px] mt-2 text-center">
              Exclusive Rewards
            </h1>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 p-4">
            <Icon4 />
            <h1 className="font-Inter text-[20px] mt-2 text-center">
              High Quality Craftmanship
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelahPromis;

function Icon1(props) {
  return (
    <svg
      width="40"
      height="34"
      viewBox="0 0 40 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 34V32.3254H9.45965V26.2472H2.18165V24.5726H9.45965V18.4583H4.57173V16.7837H9.45965V10.0553L5.6259 1.11769L7.17898 0.433209L11.1489 9.76468H38.2368L34.0771 0.691139L35.6296 0L40 9.76468V34H0ZM20.1967 19.2925H29.2821C29.5152 19.2925 29.7105 19.2163 29.868 19.064C30.0256 18.9116 30.1044 18.7103 30.1044 18.4599C30.1044 18.21 30.0256 18.0071 29.868 17.8514C29.7105 17.6958 29.5152 17.6179 29.2821 17.6179H20.1967C19.9246 17.6179 19.7184 17.7019 19.5779 17.8697C19.4375 18.038 19.3673 18.2464 19.3673 18.4949C19.3673 18.7275 19.4375 18.9187 19.5779 19.0684C19.7184 19.2178 19.9246 19.2925 20.1967 19.2925ZM11.1112 32.3254H38.3484V11.4393H11.1112V32.3254Z"
        fill="#C84253"
      />
    </svg>
  );
}

function Icon2(props) {
  return (
    <svg
      width="65"
      height="73"
      viewBox="0 0 65 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.8543 50.9702V38.6753L26.9676 32.4818V44.2331C26.9676 44.3943 27.0083 44.5452 27.0899 44.686C27.1712 44.827 27.2934 44.9478 27.4565 45.0482L37.8543 50.9702ZM39.0533 50.9702L49.4158 45.0482C49.5789 44.9478 49.7011 44.827 49.7824 44.686C49.864 44.5452 49.9047 44.3943 49.9047 44.2331V32.4579L39.0533 38.6903V50.9702ZM37.3654 52.0707L26.8742 46.0749C26.5036 45.8756 26.2266 45.6051 26.0434 45.2637C25.8602 44.922 25.7686 44.5684 25.7686 44.2029V32.4971C25.7686 32.1402 25.8602 31.7913 26.0434 31.4504C26.2266 31.1095 26.5036 30.8344 26.8742 30.625L37.3654 24.6489C37.7112 24.4396 38.0677 24.335 38.435 24.335C38.8025 24.335 39.1715 24.4396 39.5422 24.6489L50.033 30.625C50.3804 30.8344 50.6457 31.1095 50.8289 31.4504C51.0121 31.7913 51.1037 32.1402 51.1037 32.4971V44.1879C51.1037 44.5733 51.0121 44.9351 50.8289 45.2731C50.6457 45.6114 50.3804 45.8736 50.033 46.0596L39.5422 52.0707C39.1715 52.28 38.8025 52.3846 38.435 52.3846C38.0677 52.3846 37.7112 52.28 37.3654 52.0707ZM44.3811 34.266L49.1942 31.5187L38.925 25.6756C38.7619 25.595 38.599 25.5547 38.4361 25.5547C38.2733 25.5547 38.1104 25.595 37.9473 25.6756L33.7041 28.0713L44.3811 34.266ZM38.4361 37.7075L43.2171 34.9273L32.4848 28.8122L27.7039 31.5187L38.4361 37.7075Z"
        fill="#C84253"
      />
      <path
        d="M49.7299 55.7295C50.1207 55.8668 50.3262 56.2949 50.1889 56.6857L47.9515 63.0541C47.8142 63.4449 47.3861 63.6504 46.9953 63.5131C46.6045 63.3758 46.399 62.9477 46.5363 62.5569L48.5251 56.8961L42.8643 54.9073C42.4735 54.77 42.268 54.3419 42.4053 53.9511C42.5425 53.5603 42.9707 53.3548 43.3614 53.4921L49.7299 55.7295ZM47.3707 57.4502L47.0461 56.7741L47.3707 57.4502ZM47.0461 56.7741L49.1567 55.7609L49.8058 57.1132L47.6953 58.1263L47.0461 56.7741ZM58.0551 29.0181L59.051 31.1368L57.6935 31.7749L56.6975 29.6562L58.0551 29.0181ZM19.7064 47.0437C24.5355 57.3174 36.8121 61.6867 47.0461 56.7741L47.6953 58.1263C36.7101 63.3996 23.5324 58.7096 18.3489 47.6818L19.7064 47.0437ZM29.3578 19.9258C19.241 24.7822 14.9326 36.8877 19.7064 47.0437L18.3489 47.6818C13.2247 36.7804 17.8493 23.7864 28.7087 18.5736L29.3578 19.9258ZM28.7087 18.5736C39.6938 13.3003 52.8715 17.9903 58.0551 29.0181L56.6975 29.6562C51.8684 19.3825 39.5918 15.0131 29.3578 19.9258L28.7087 18.5736Z"
        fill="#C84253"
      />
    </svg>
  );
}

function Icon3(props) {
  return (
    <svg
      width="40"
      height="35"
      viewBox="0 0 40 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.68315 25.5764V31.9833C1.68315 32.322 1.82602 32.6326 2.11175 32.9151C2.39747 33.1973 2.71181 33.3384 3.05476 33.3384H36.9452C37.2882 33.3384 37.6025 33.1973 37.8883 32.9151C38.174 32.6326 38.3168 32.322 38.3168 31.9833V25.5764H1.68315ZM3.05476 6.57268H11.475C11.2892 6.22851 11.1181 5.84618 10.9617 5.42568C10.8053 5.00556 10.727 4.5902 10.727 4.17961C10.727 2.99849 11.1387 2.00652 11.9621 1.20369C12.7855 0.40123 13.7805 0 14.9472 0C15.7067 0 16.4195 0.194103 17.0857 0.582307C17.7519 0.970878 18.2724 1.45705 18.6473 2.04082L19.9259 3.89507L21.205 2.04082C21.6092 1.43797 22.1251 0.947027 22.7527 0.567996C23.3802 0.189332 24.0764 0 24.841 0C26.0419 0 27.0523 0.400681 27.8724 1.20204C28.692 2.0034 29.1019 3.00179 29.1019 4.19723C29.1019 4.56635 29.0307 4.95786 28.8884 5.37175C28.7461 5.78563 28.57 6.18595 28.36 6.57268H36.9452C37.7779 6.57268 38.4952 6.86989 39.0971 7.4643C39.699 8.05872 40 8.76413 40 9.58053V31.9922C40 32.8089 39.699 33.5143 39.0971 34.1084C38.4952 34.7028 37.7811 35 36.9547 35H3.04528C2.21894 35 1.50481 34.7028 0.902885 34.1084C0.300962 33.5143 0 32.8089 0 31.9922V9.58053C0 8.76413 0.300962 8.05872 0.902885 7.4643C1.50481 6.86989 2.2221 6.57268 3.05476 6.57268ZM1.68315 23.2009H38.3168V9.58934C38.3168 9.25067 38.174 8.94025 37.8883 8.65808C37.6025 8.37556 37.2882 8.23429 36.9452 8.23429H22.7973L27.5926 14.8499L26.2723 15.8444L19.9142 7.18031L13.5561 15.8444L12.2358 14.8499L17.074 8.23429H3.05476C2.71181 8.23429 2.39747 8.37556 2.11175 8.65808C1.82602 8.94025 1.68315 9.25067 1.68315 9.58934V23.2009ZM14.9723 6.7334C15.679 6.7334 16.2844 6.48609 16.7886 5.99148C17.2932 5.49687 17.5455 4.90062 17.5455 4.20273C17.5455 3.50485 17.2951 2.90694 16.7942 2.40903C16.2933 1.91075 15.6896 1.66161 14.9829 1.66161C14.2762 1.66161 13.6705 1.90892 13.1659 2.40353C12.6617 2.89851 12.4096 3.49476 12.4096 4.19227C12.4096 4.89016 12.6601 5.48824 13.1609 5.98652C13.6618 6.48444 14.2656 6.7334 14.9723 6.7334ZM24.8382 6.7334C25.5479 6.7334 26.1554 6.48609 26.6607 5.99148C27.1664 5.49687 27.4193 4.90062 27.4193 4.20273C27.4193 3.50485 27.1664 2.90694 26.6607 2.40903C26.1554 1.91075 25.5479 1.66161 24.8382 1.66161C24.1549 1.66161 23.5582 1.90892 23.0481 2.40353C22.5379 2.89851 22.2829 3.49476 22.2829 4.19227C22.2829 4.89016 22.5379 5.48824 23.0481 5.98652C23.5582 6.48444 24.1549 6.7334 24.8382 6.7334Z"
        fill="#C84253"
      />
    </svg>
  );
}

function Icon4(props) {
  return (
    <svg
      width="31"
      height="40"
      viewBox="0 0 31 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1041 26.1037L24.1529 14.9924L23.0205 13.769L13.1858 23.6978L8.00115 18.4636L6.79986 19.6763L13.1041 26.1037ZM15.5 40C11.0416 38.6156 7.34365 35.857 4.40619 31.7243C1.46873 27.592 0 22.9409 0 17.7708V5.8546L15.5 0L31 5.8546V17.7708C31 22.9409 29.5313 27.592 26.5938 31.7243C23.6564 35.857 19.9584 38.6156 15.5 40ZM15.5 38.1724C19.5195 36.8609 22.8281 34.3013 25.4259 30.4936C28.0236 26.6856 29.3225 22.4455 29.3225 17.7736V6.98603L15.5 1.7883L1.67746 6.98603V17.7736C1.67746 22.4455 2.97635 26.6856 5.57413 30.4936C8.17191 34.3013 11.4805 36.8609 15.5 38.1724Z"
        fill="#C84253"
      />
    </svg>
  );
}
