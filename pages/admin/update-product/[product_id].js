import AdminNav from "@/components/AdminNav";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import TextArea from "@/components/inputs/TextArea";
import TextInput from "@/components/inputs/TextInput";
import Loader from "@/components/Loader/Loader";
import ProtectedRoute from "@/components/route/ProtectedRoute";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import styles from "../add-product.module.scss";

const home = ({ query }) => {
  const { product_id } = query;
  const [state, setState] = useState({
    product_name: "",
    short_info: "",
    main_image_url: "",
    price: "",
    warrenty_tenure: "",
  });
  const [productState, setProductState] = useState([]);
  const [ddState, setDDState] = useState();
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  let dropdown_options = [
    "punchline",
    "heading",
    "subheading",
    "subtitle",
    "body",
    "points",
    "testreport",
    "images",
  ];

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/fetchProduct", {
        product_id: product_id,
      });
      console.log(res);
      const data = res.data.data;

      setState({
        product_name: data.product_name,
        short_info: data.short_info,
        price: data.price,
        main_image_url: data.main_image_url,
        warrenty_tenure: data.warrenty_tenure,
      });
      setProductState(data.details);
      toast.success(`Successfully fetched product ${state.product_name}`);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const dummy = [
    {
      type: "product_name",
      data: "",
    },
    {
      type: "short_info",
      data: "",
    },
    {
      type: "price",
      data: "",
    },
    {
      type: "punchline",
      data: "",
    },
    {
      type: "heading",
      data: "",
    },
    {
      type: "subHeading",
      data: "",
    },
    {
      type: "subtitle",
      data: "",
    },
    {
      type: "body",
      data: "",
    },
    {
      type: "points",
      data: ["", "", ""],
    },
    {
      type: "testReport",
      data: "",
    },
    {
      type: "rating",
      data: "",
    },
  ];

  const AddSectionArea = () => {
    return (
      <div className={styles.addSection}>
        <Dropdown
          options={dropdown_options}
          onChange={(i) => {
            setDDState(i.value);
          }}
          value={ddState}
          placeholder="Select Item"
          style={{
            marginTop: "10rem",
            width: "500px",
          }}
        />
        <button
          onClick={() => {
            addSection(ddState);
          }}
          name="Add"
          className="normal-button"
        >
          Add
        </button>
      </div>
    );
  };

  const handleChange = (e) => {
    setState((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  const submitData = async () => {
    const data = {
      ...state,
      details: productState,
    };

    setLoading(true);
    try {
      const body = {
        data: data,
        product_id: product_id,
      };
      const res = await axios.post("/api/updateproduct", body);
      console.log(res);
      toast.success(`Successfully updated product ${state.product_name}`);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  const addSection = (type) => {
    const randnum = Math.floor(Math.random() * 10000 + 1);

    console.log("adding section", type);

    if (type === "points" || type === "images") {
      setProductState((old) => {
        return [
          ...old,
          {
            id: `${type}_${randnum}`,
            type,
            data: [""],
          },
        ];
      });
    }
    if (type === "testreport") {
      setProductState((old) => {
        return [
          ...old,
          {
            id: `${type}_${randnum}`,
            type,
            data: {
              url: "",
              title: "",
            },
          },
        ];
      });
    }

    if (
      type === "punchline" ||
      type === "subtitle" ||
      type === "heading" ||
      type === "subheading" ||
      type === "body"
    ) {
      setProductState((old) => {
        return [
          ...old,
          {
            id: `${type}_${randnum}`,
            type,
            data: "",
          },
        ];
      });
    }
    toast.success(`Added ${type}`);
  };

  console.log(productState);

  const addPoint = (idx) => {
    if (productState.length > idx) {
      let newProductObj = productState[idx];
      let data = newProductObj.data;
      data.push("");
      newProductObj = {
        ...newProductObj,
        data: data,
      };

      setProductState((old) => {
        let newArr = [...old];
        newArr[idx] = newProductObj;
        return newArr;
      });
    }
  };

  const deletePoint = (idx) => {
    const newArr = productState.filter((pr, id) => id !== idx);
    setProductState(newArr);
  };

  const handleProductDetailChange = (e, idx) => {
    if (productState.length > idx) {
      let newProductObj = productState[idx];
      const input_name = e.target.name;

      if (
        input_name === "punchline" ||
        input_name === "subtitle" ||
        input_name === "heading" ||
        input_name === "subheading" ||
        input_name === "body"
      ) {
        newProductObj = {
          ...newProductObj,
          data: e.target.value,
        };
      }

      setProductState((old) => {
        let newArr = [...old];
        newArr[idx] = newProductObj;
        return newArr;
      });
    } else {
      alert("Something went Wrong!");
    }
  };
  const handlePointDetailChange = (e, idx, pidx) => {
    if (productState.length > idx) {
      let newProductObj = productState[idx];
      const input_name = e.target.name;

      if (input_name === "points" || input_name === "images") {
        let data = newProductObj.data;

        data[pidx] = e.target.value;

        newProductObj = {
          ...newProductObj,
          data,
        };
      }

      setProductState((old) => {
        let newArr = [...old];
        newArr[idx] = newProductObj;
        return newArr;
      });
    } else {
      alert("Something went Wrong!");
    }
  };

  const handleTestReportChange = (e, idx) => {
    if (productState.length > idx) {
      let newProductObj = productState[idx];
      const input_name = e.target.name;
      let data = newProductObj.data;
      data = {
        ...data,
        [e.target.name === "testreporttitle" ? "title" : "url"]: e.target.value,
      };

      newProductObj = {
        ...newProductObj,
        data,
      };

      setProductState((old) => {
        let newArr = [...old];
        newArr[idx] = newProductObj;
        return newArr;
      });
    } else {
      alert("Something went Wrong!");
    }
  };
  return (
    <ProtectedRoute>
      {loading && <Loader />}
      <AdminNav />
      <main className="main pt-7" style={{ paddingTop: "6rem" }}>
        <div className={styles.product_details}>
          <TextInput
            id="outlined-name"
            label="Product Name"
            name="product_name"
            fullWidth={true}
            value={state.product_name}
            onChange={handleChange}
            error={formErrors.product_name}
            helperText={formErrors.product_name}
          />
          <TextArea
            id="outlined-name"
            label="Short Info"
            name="short_info"
            fullWidth={true}
            value={state.short_info}
            onChange={handleChange}
            error={formErrors.short_info}
            helperText={formErrors.short_info}
          />
          <TextArea
            id="outlined-name"
            label="Main Image URL"
            name="main_image_url"
            fullWidth={true}
            value={state.main_image_url}
            onChange={handleChange}
            error={formErrors.main_image_url}
            helperText={formErrors.main_image_url}
          />
          <TextInput
            id="outlined-name"
            label="Price"
            name="price"
            fullWidth={true}
            value={state.price}
            onChange={handleChange}
            error={formErrors.price}
            helperText={formErrors.price}
          />
          <TextInput
            id="outlined-name"
            label="Warrenty Time(in years)"
            name="warrenty_tenure"
            fullWidth={true}
            value={state.warrenty_tenure}
            onChange={handleChange}
            error={formErrors.warrenty_tenure}
            helperText={formErrors.warrenty_tenure}
          />
        </div>
        <div className={styles.productExtraDetails}>
          <div>
            <p className="subtitle">Product Details</p>
            {productState.length === 0 && (
              <p className="caption-text">
                No details added yet! Start by adding a punchline from above
                dropdown.
              </p>
            )}
          </div>
          <AddSectionArea />
          <div className={styles.productDetails}>
            {productState.map((ps, idx) => {
              return (
                <div>
                  <div className={styles.productDetailsRowsHead}>
                    <span className="subtitle">
                      {idx + 1}. {ps.type}
                    </span>
                    <span>
                      <button
                        onClick={() => {
                          deletePoint(idx);
                        }}
                        className="normal-button"
                      >
                        Delete
                      </button>
                    </span>
                  </div>
                  {ps.type === "punchline" && (
                    <TextArea
                      id={ps.id}
                      label="Punchline"
                      name="punchline"
                      fullWidth={true}
                      value={ps.data}
                      onChange={(e) => handleProductDetailChange(e, idx)}
                      error={formErrors.price}
                      helperText={formErrors.price}
                    />
                  )}
                  {ps.type === "heading" && (
                    <TextArea
                      id={ps.id}
                      label="Heading"
                      name="heading"
                      fullWidth={true}
                      value={ps.data}
                      onChange={(e) => handleProductDetailChange(e, idx)}
                      error={formErrors.price}
                      helperText={formErrors.price}
                    />
                  )}
                  {ps.type === "subheading" && (
                    <TextArea
                      id={ps.id}
                      label="Sub Heading"
                      name="subheading"
                      fullWidth={true}
                      value={ps.data}
                      onChange={(e) => handleProductDetailChange(e, idx)}
                      error={formErrors.price}
                      helperText={formErrors.price}
                    />
                  )}
                  {ps.type === "subtitle" && (
                    <TextArea
                      id={ps.id}
                      label="Subtitle"
                      name="subtitle"
                      fullWidth={true}
                      value={ps.data}
                      onChange={(e) => handleProductDetailChange(e, idx)}
                      error={formErrors.price}
                      helperText={formErrors.price}
                    />
                  )}
                  {ps.type === "body" && (
                    <TextArea
                      id={ps.id}
                      label="Body"
                      name="body"
                      fullWidth={true}
                      value={ps.data}
                      onChange={(e) => handleProductDetailChange(e, idx)}
                      error={formErrors.price}
                      helperText={formErrors.price}
                    />
                  )}
                  {ps.type === "points" && (
                    <div className={styles.points}>
                      {ps.data.map((pointData, pidx) => (
                        <div className={styles.point}>
                          <TextArea
                            label={`Point ${pidx + 1}`}
                            name={`points`}
                            fullWidth={true}
                            value={pointData}
                            onChange={(e) =>
                              handlePointDetailChange(e, idx, pidx)
                            }
                            error={formErrors.price}
                            helperText={formErrors.price}
                          />
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          addPoint(idx);
                        }}
                        className="normal-button mt-3"
                      >
                        Add Point
                      </button>
                    </div>
                  )}
                  {ps.type === "images" && (
                    <div className={styles.points}>
                      {ps.data.map((pointData, pidx) => (
                        <div className={styles.point}>
                          <TextArea
                            label={`Image ${pidx + 1}`}
                            name={`images`}
                            fullWidth={true}
                            value={pointData}
                            onChange={(e) =>
                              handlePointDetailChange(e, idx, pidx)
                            }
                            error={formErrors.price}
                            helperText={formErrors.price}
                          />
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          addPoint(idx);
                        }}
                        className="normal-button mt-3"
                      >
                        Add Image
                      </button>
                    </div>
                  )}
                  {ps.type === "testreport" && (
                    <div className={styles.testreport}>
                      <TextArea
                        label={`Test Report Title`}
                        name={`testreporttitle`}
                        fullWidth={true}
                        value={ps.data.title}
                        onChange={(e) => handleTestReportChange(e, idx)}
                        error={formErrors.price}
                        helperText={formErrors.price}
                      />
                      <TextArea
                        label={`Test Report URL`}
                        name={`testreporturl`}
                        fullWidth={true}
                        value={ps.data.url}
                        onChange={(e) => handleTestReportChange(e, idx)}
                        error={formErrors.price}
                        helperText={formErrors.price}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className={styles.submit}>
            <PrimaryButton onClick={submitData} name="Submit Data" />
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
};

export default home;

export const getServerSideProps = async (context) => {
  const { query } = context;
  return { props: { query } };
};
