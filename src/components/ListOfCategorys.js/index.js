import React, { useState, useEffect } from 'react'
import { Category } from '../category'
import { List, Item } from './styles'
import { Loading } from './loading'

function useCategoriesData () {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])

  useEffect(function () {
    setLoading(true)
    window
      .fetch('https://petgram-server-marlon-sharkwhite21.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowfixed] = useState(false)

  useEffect(function () {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowfixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  })

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'> <Loading /> </Item>
          : categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
