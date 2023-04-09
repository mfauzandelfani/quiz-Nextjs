import React, { useEffect, useState } from "react";
import Customer from "../api/customer";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { GetCategoryRequest } from "../redux-saga/action/categoryAction";

export default function CategoryRedux() {
  const array = [1];
  const dispatch = useDispatch();
  const { category } = useSelector((state: any) => state.categoryState);
  useEffect(() => {
    dispatch(GetCategoryRequest());
  }, []);

  return (
    <div>
      <Layout>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded">
          Create
        </button>
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Id
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Nama
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Deskripsi
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Start
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Update
              </th>
          
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {category &&
              category.map((item: any) => {
                return (
                  <>
                    <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        {item.idCategory}
                      </td>
                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        {item.nameCategory}
                      </td>
                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        {item.description}
                      </td>
                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        {item.createdat}
                      </td>
                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        {item.updated}
                      </td>
               
                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                          Edit
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </Layout>
    </div>
  );
}
