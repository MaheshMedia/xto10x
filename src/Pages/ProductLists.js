import { Avatar, Button, Card, Checkbox, Col, Divider, Image, List, Radio, Rate, Row, Skeleton, Space, Spin, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPosts } from '../Redux/action/post';
import { Filter } from "./Filter";

const { Text, Link } = Typography;


const ProductLists = ({ getPosts, posts, loading }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    getPosts()
    setData(posts)
  },
    [posts.length]);

  console.log("my posts", data)


  // Reviews K formatter

  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
  }
  return (
    <>
      {
        loading ? (
          <Row justify="center" align="middle">          <Spin />
          </Row>
        ) : (
          <Row>
            <Col xl={{span:6}} xs={{span:10}} >
              <Filter posts={posts} data={data} setData={setData} />
            </Col>
            <Col  xl={{span:18}} xs={{span:14}} >
              <Row>
                {
                  data.map((post) => {
                    return (
                      <Card style={{ width: "200px" }}>
                        <div>
                          <Image src={post.searchImage} ></Image>
                          
                           {/* Rating */}

                          <div className="rating-box" >
                            {Math.round(post.rating * 10) / 10} <Rate count={1} value={1} style={{ color: "green" }} /> | {kFormatter(post.ratingCount)}
                          </div>
                        </div>

                        <h4><b>{post.brand}</b> </h4>
                        
                        {/* Addition Information */}

                        <Text type="secondary">{post.additionalInfo}</Text>
                        <Space style={{ width: "100%" }}>
                          <Text strong>Rs.{post.price} </Text>
                          <Text delete>{post.mrp}</Text>
                          <Text type="warning">({post.discount})</Text>
                        </Space>
                      </Card>
                    )
                  })
                }
              </Row>
            </Col>

          </Row>

        )
      }

    </>
  );
};

const mapStateToProps = (state) => (
  {
    posts: state.post.posts,
    loading: state.post.loading
  }
)

export default connect(mapStateToProps, { getPosts })(ProductLists);

