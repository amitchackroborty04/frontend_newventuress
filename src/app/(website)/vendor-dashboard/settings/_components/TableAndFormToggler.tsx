"use client"
import React from "react"
import StoreContainer from "./StoreContainer"
import VendorStoreLargeForm from "./AddVendorStore/VendorStoreLargeForm"
import StoreListHeader from "./StoreListHeader";
import StoreFilter from "./StoreFilter";

const TableAndFormToggler = () => {
    const [showForm, setShowForm] = React.useState(false);
  return (
    <div className="space-y-[30px]">
        <StoreListHeader setShowForm={setShowForm} showForm={showForm}/>
        <StoreFilter />
        {
            showForm ? <VendorStoreLargeForm/> : <StoreContainer/>
        }
    </div>
  )
}

export default TableAndFormToggler