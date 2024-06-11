import { PieChart } from "./Charts";
import { FaAngleDown } from "react-icons/fa";

const PieCharts = () => {
  return (
    <div className="w-96">
      <main className="flex flex-col gap-5 bg-white p-5 w-96">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">Your FD Portfolio</h1>
          <button className="border flex items-center justify-center gap-2 border-gray-300 shadow-lg px-3 rounded py-1">
            Deposite Amit <FaAngleDown className="text-sm" />
          </button>
        </div>
        <section className="flex items-center justify-between w-96 px-5">
          <div className="w-40">
            <PieChart
              labels={[
                " Bajaj Finserv",
                " Shriram Finance",
                "  Mahindra Finance",
                "Utkarsh Small Finance Bank",
              ]}
              data={[25000, 20000, 15000, 40000]}
              backgroundColor={[`#6C63FF`, `#FA9D17`, `#B9C606`, `#59CBD3`]}
              offset={[0, 0, 0]}
            />
          </div>
          <div className="ml-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span
                  className="block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: "#6C63FF" }}
                ></span>
                Bajaj Finserv
              </li>
              <li className="flex items-center">
                <span
                  className="block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: "#FA9D17" }}
                ></span>
                Shriram Finance
              </li>
              <li className="flex items-center">
                <span
                  className="block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: "#B9C606" }}
                ></span>
                Mahindra Finance
              </li>
              <li className="flex items-center">
                <span
                  className="block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: "#59CBD3" }}
                ></span>
                Utkarsh Small Finance Bank
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PieCharts;
