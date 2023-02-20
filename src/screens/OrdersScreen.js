import { FlatList, StyleSheet } from "react-native"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import OrderItem from "../components/OrderItem"
import { getOrders } from "../store/actions/order.action"

const OrdersScren = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders.list)

  useEffect(() => {
    dispatch(getOrders())
  }, [])

  const renderOrderItem = ({ item }) => (
    <OrderItem item={item} onDelete={() => console.log("on delete")} />
  )
  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.id}
      renderItem={renderOrderItem}
    />
  )
}

export default OrdersScren

const styles = StyleSheet.create({})