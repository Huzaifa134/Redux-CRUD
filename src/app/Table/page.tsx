"use client";
import React, { useEffect, useState } from "react";
import arrows from "../../../public/arrows.svg";
import Image from "next/image";
import Link from "next/link";
import image from "../../../public/image.jpg";

interface User {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}

const Table = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const data = await response.json();
        setUsers(data.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <table
        className="mx-10 mt-10"
        style={{ borderCollapse: "separate", borderSpacing: "0px 30px" }}
        cellPadding={5}
      >
        <tbody>
          {" "}
          {/* Add tbody here */}
          <tr className="bg-[#C5E3D5] h-10 ">
            <th className="pr-56"></th>
            <th>
              <div className="flex justify-center items-center pr-20">
                Customer ID
                <Link href={""}>
                  <Image
                    alt="arrow"
                    src={arrows}
                    height={10}
                    width={10}
                    className="ml-2"
                  />
                </Link>
              </div>
            </th>
            <th>
              <div className="flex justify-center items-center pr-20">
                Customer Name
                <Link href={""}>
                  <Image
                    alt="arrow"
                    src={arrows}
                    height={10}
                    width={10}
                    className="ml-2"
                  />
                </Link>
              </div>
            </th>
            <th>
              <div className="flex justify-center items-center pr-32">
                Email
                <Link href={""}>
                  <Image
                    alt="arrow"
                    src={arrows}
                    height={10}
                    width={10}
                    className="ml-2"
                  />
                </Link>
              </div>
            </th>
            <th className="pr-64"></th>
          </tr>
          {/* data */}
          {users.map((user: User) => (
            <tr className="bg-white" key={user.id}>
              <td>
                <Image src={user.avatar} alt="image" height={40} width={80} />
              </td>
              <td>{user.id}</td>
              <td className="text-[#65C199]">
                <u>
                  {user.first_name} {user.last_name}
                </u>
              </td>
              <td className="  ">{user.email}</td>
              <td>
                <Link
                  href={""}
                  className="p-2 mr-5 ml-10 rounded-md px-7 text-xs text-[#015249] bg-[#65C199]"
                >
                  Edit
                </Link>
                <Link
                  href={""}
                  className="p-2 rounded-md px-6 text-xs bg-[#EF9999] text-[#c83737]"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
