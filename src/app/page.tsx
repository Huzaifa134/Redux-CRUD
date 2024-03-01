import Image from "next/image";
import profile from "../../public/profile.svg";
import Link from "next/link";
import Table from "./Table/page";
export default function Home() {
  return (
    <div className="flex">
      {/* left side  */}
      <div
        className="bg-[#015249] w-80 text-white h-[729px]"
        style={{ position: "fixed" }}
      >
        <h1 className="text-center text-5xl mb-20 pt-10">SAVIYNT</h1>
        <div className="flex bg-[#043933] gap-x-5 w-48 p-3 rounded-md justify-center items-center m-auto shadow-lg">
          <Image src={profile} alt="Saviynt" width={20} height={20} />

          <h3>CUSTOMERS</h3>
        </div>
      </div>
      {/* right side */}

      <div style={{ position: "absolute", right: "0", top: "0" }}>
        {/* header  */}
        <h1 className="bg-white w-[1195px] ml-3  text-3xl font-bold p-7">
          CUSTOMERS
        </h1>

        {/* add new customers  */}
        <Link href="/addnew">
          <div className="p-2 rounded-md flex items-center bg-gradient-to-r from-[#409F7B] to-[#085547] w-60 text-white mt-10 ml-10">
            <h1 className="text-2xl">+</h1>
            <h1 className=" ml-5">ADD NEW CUSTOMERS</h1>
          </div>
        </Link>

        <Table />
      </div>
    </div>
  );
}
