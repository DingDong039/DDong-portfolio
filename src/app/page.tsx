"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  image: string;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <>
      <main className="container mx-auto">
        <div>
          <h1 className="font-bold text-5xl my-3">Overview</h1>
          <h1 className="font-semibold text-4xl my-5">Headding 1</h1>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cupiditate odio! Saepe unde aperiam consectetur. Officia alias, amet blanditiis laboriosam fuga quas, quos iusto, maxime ipsam culpa in laborum pariatur.
            Excepturi beatae corrupti, blanditiis delectus explicabo quis veniam totam quas voluptate aspernatur harum maxime inventore, asperiores vitae odio laborum nisi illo facilis est temporibus a? Quia facilis dolores excepturi explicabo.
            Ullam, quis dolorum, molestiae esse sequi amet, voluptate dignissimos nam est dolore porro reprehenderit tempore nisi optio tenetur vel deserunt voluptatum harum enim voluptates illo! Iusto facilis ipsa distinctio! Non.
            Esse sapiente voluptatum omnis non reiciendis aperiam atque quam, nesciunt vel aliquid expedita voluptatem nulla assumenda pariatur natus autem animi consequuntur cupiditate fugiat rerum neque beatae quisquam libero sint? Fugit.
            Eveniet eaque dolorem nesciunt asperiores totam vero dolor, numquam possimus! Laboriosam officia, velit aliquam dolorem natus quaerat ex quis rem pariatur. Qui consectetur explicabo earum, doloremque vero culpa laudantium consequatur.
            Fuga, eius distinctio labore, omnis corrupti officia quisquam laboriosam eligendi quia ad tenetur optio, dolorem reprehenderit quam hic magni sit fugiat temporibus veniam fugit nihil totam quis culpa? Excepturi, corporis!
            Recusandae accusamus excepturi facere maxime, iusto expedita tempore soluta minima? Eveniet dignissimos necessitatibus corporis, culpa temporibus veritatis aut suscipit sapiente officia accusamus rem consequuntur, quaerat pariatur impedit aspernatur laboriosam dicta!
            Ab rem velit inventore porro ut facilis, delectus quos ipsam ipsa quia mollitia dignissimos, pariatur aut, ex doloribus iusto non ducimus tempora ratione. At quod modi eos eveniet aliquid delectus?
            Atque, corporis laudantium itaque commodi expedita fugiat? Iusto, aspernatur? Ipsum nesciunt, nulla culpa voluptates ipsa, accusantium aut nihil ea molestiae aspernatur amet iure sequi rem velit rerum dolores quas ab!
            Excepturi, explicabo debitis porro alias hic dolor soluta et perferendis deleniti dolores optio impedit! Magni, facilis animi. Magnam dolore odit quos distinctio aliquam qui error, ullam asperiores incidunt ut deleniti.
          </p>
          <h1 className="font-medium text-3xl">User Active</h1>
          <div>
            <ul className="p-6 divide-y divide-slate-200">
              {users.map((user) => (
                <li key={user.id} className="flex py-4 first:pt-0 last:pb-0">
                    <Image
                      src={user.image}
                      alt={`${user.firstName} ${user.lastName}`}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                    <div className="ml-3 overflow-hidden">
                      <p className="text-md font-medium text-slate-900">ID: {user.id}</p>
                      <p className="text-md font-medium text-slate-900">Name: {user.firstName} {user.lastName}</p>
                      <p className="text-sm text-slate-500 truncate">Age: {user.age}</p>
                      <p className="text-sm text-slate-500 truncate">Email: {user.email}</p>
                    </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
