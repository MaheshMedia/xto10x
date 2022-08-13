import { Avatar, Button, Card, Checkbox, Col, Divider, Image, List, Radio, Rate, Row, Skeleton, Space, Spin, Typography } from "antd";
import { getRenderPropValue } from "antd/lib/_util/getRenderPropValue";
import React, { useEffect, useState } from "react";
import { PlusOutlined } from '@ant-design/icons';
const { Text, Link } = Typography;

export const Filter = ({ posts, setData, data }) => {

  const [maxCategory, setMaxCategory] = useState(5)
  const [maxBrand, setMaxBrand] = useState(5)
  const [categoryCheckValues, setcategoryCheckValues] = useState([])
  const [brandCheckValues, setBrandCheckValues] = useState([])
  const [genderCheckValues, setGenderCheckValues] = useState([])
  const [gender, setGender] = useState('')
  const [genderData, setGenderData] = useState([])
  const [totalCategory, setTotalCategory] = useState([])


  const categoryData = () => {


    let slicedData = posts.slice(0, maxCategory)

    return slicedData
  }

  const brandData = () => {

    let slicedData = posts.slice(0, maxCategory)

    return slicedData
  }

  //Filter the gender

  const filterGender = (e) => {
    console.log('radio checked', e.target.value);
    console.log(e.target.checked)
    setGender(e.target.value)
    if (e.target.checked) {

      if (brandCheckValues.length == 0 || categoryCheckValues.length == 0) {
        let filteredData = posts.filter((post) => {
          return post.gender === e.target.value
        })
        console.log(filteredData)
        setData(filteredData)
        setGenderData(filteredData)
      }
      else {
        let filteredData = data.filter((post) => {
          return post.gender === e.target.value
        })
        console.log(filteredData)
        setData(filteredData)
      }


    }
  };

  // Filter the Category

  const filterCategory = (checkedValues) => {
    if (checkedValues.length > 0) {

      setcategoryCheckValues([...checkedValues])

      if (brandCheckValues.length > 0 && gender) {


        let filteredData = data.filter((post) => {
          return checkedValues.includes(post.category)
        })
        setData(filteredData)

      }

      else if (gender) {
        let filteredData = genderData.filter((post) => {
          return checkedValues.includes(post.category)
        })
        setData(filteredData)
      }

      else {
        let filteredData = posts.filter((post) => {
          return checkedValues.includes(post.category)
        })
        setData(filteredData)

      }

    }
    else {
      setcategoryCheckValues([])
      let filteredData = posts.filter((post) => {
        return brandCheckValues.includes(post.brand)
      })
      setData(filteredData)

    }
  };


  // Filter the brand

  const filterBrand = (checkedValues) => {

    if (checkedValues.length > 0) {

      setBrandCheckValues([...checkedValues])

      if (categoryCheckValues.length > 0) {
        let filteredData = data.filter((post) => {
          return checkedValues.includes(post.brand)
        })

        setData(filteredData)
      }
      else {
        let filteredData = posts.filter((post) => {
          return checkedValues.includes(post.brand)
        })

        setData(filteredData)
      }

    }
    else {
      setBrandCheckValues([])
      let filteredData = posts.filter((post) => {
        return categoryCheckValues.includes(post.category)
      })
      setData(filteredData)
    }
  }

  return (

    //Filter container


    <div className="filter_container">
      <div className="filter_item">
        <Radio.Group onChange={filterGender}  >
          <Space direction="vertical"   >
            <Radio value="Men">Men</Radio>
            <Radio value="Women">Women</Radio>
            <Radio value="boys">Boys</Radio>
            <Radio value="girls">Girls</Radio>

          </Space>
        </Radio.Group>
        <Divider />
      </div>

      {/* Filter Category */}

      <div className="filter_item">
        <Checkbox.Group onChange={filterCategory} >
          <Space direction="vertical" >
            {
              categoryData().map((post, index) => {
                return (
                  <Checkbox value={post.category}>{post.category}</Checkbox>
                )
              }
              )
            }
            <Text style={{ cursor: "pointer" }} type="danger" onClick={() => {
              setMaxCategory(maxCategory + 5)
            }} ><PlusOutlined />  more  365 </Text>
            {
              maxCategory >= 10 && (
                <Text style={{ cursor: "pointer" }} onClick={() => {
                  setMaxCategory(maxCategory - 5)
                }} >show less</Text>
              )
            }
          </Space>
        </Checkbox.Group>
        <Divider />
      </div>

      {/* Filter Brand Items */}
      
      <div className="filter_item">
        <Checkbox.Group onChange={filterBrand} >
          <Space direction="vertical" >
            {
              brandData().map((post, index) => {


                return (
                  <Checkbox value={post.brand}>{post.brand}</Checkbox>
                )
              }
              )
            }
            <Text style={{ cursor: "pointer" }} onClick={() => {
              setMaxBrand(maxBrand + 5)
            }} type="danger"><PlusOutlined /> more 4381</Text>
             
            
          </Space>
        </Checkbox.Group>
        <Divider />
      </div>
    </div>)
}
