import { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingState from "../../LoadingState";
import logo from "../../assets/2.png";
import { useGetUser } from "../../hooks/useGetUser";

const url = "https://codelab-hub.onrender.com";

const ImageSettings = () => {
  const newUser: any = useGetUser()
  const [loading, setLoading] = useState(false);


  const [userData, setUserData] = useState([]);

  const [image, setImage] = useState("");
  const [avatar, setAvatar] = useState("");

  const onHandleImage = (e: any) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };

  const onSubmit = (async (e: any) => {
    e.preventDefault()

    setLoading(true);
    const formData = new FormData();

    formData.append("image", avatar);

    const config: any = {
      "content-type": "multipart/form-data",
    };

    await axios
      .patch(`${url}/api/auth/${newUser?._id}/update-image`, formData, config)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your image has been added to your Gallery successfully",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          //   navigate("/portal");
        });
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          title: error.response.data.message,
          text: `Please check and fix this ERROR`,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        }).then(() => {
          setLoading(false);
        });
      });
  });

  const getUserData = async () => {
    await axios.get(`${url}/api/auth/${newUser?._id}`).then((res) => {
      setUserData(res.data.data);

    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container>
      {loading ? <LoadingState /> : null}
      <Card>
        <Form onSubmit={onSubmit}>
          <Text>Update your Display Avatar</Text>

          <br />

          {
            <div>
              {image === "" ? (
                <ImageChoose src={logo} bg="darkorange" />
              ) : (
                <ImageChoose src={image} bg="" />
              )}
            </div>
          }

          <ImageInput
            id="pix"
            type="file"
            accept="image/*"
            onChange={onHandleImage}
          />

          {
            avatar ? <Button type="submit" bg="darkorange">
              Upload your Avatar
            </Button> : <ImageLabel htmlFor="pix">Choose an Image</ImageLabel>
          }

        </Form>
      </Card>
    </Container>
  );
};

export default ImageSettings;

const ImageLabel = styled.label`
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 30px;
  background: purple;
  color: white;
  font-size: 12px;
  text-transform: uppercase;
  transition: all 350ms;
  margin-top: 10px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

const ImageChoose = styled.img<{ bg: string }>`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: ${({ bg }) => (bg ? "contain" : "cover")};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const ImageInput = styled.input`
  display: none;
`;

const Container = styled.div`

  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  z-index:-10;

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const CardWrapper = styled.div`
  justify-content: center;
  display: flex;
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const InputArea = styled.textarea`
  resize: none;
  padding-top: 10px;
  width: 90%;
  outline: none;
  border: 1px solid #004080;
  height: 100px;
  margin: 5px 0;
  border-radius: 3px;
  padding-left: 10px;

  ::placeholder {
    font-family: Poppins;
  }
`;

const Input = styled.input`
  width: 90%;
  outline: none;
  border: 1px solid #004080;
  height: 40px;
  margin: 5px 0;
  border-radius: 3px;
  padding-left: 10px;

  ::placeholder {
    font-family: Poppins;
  }
`;

const Form = styled.form`
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const Card = styled.div`
  margin-top: 70px;
  width: 300px;
  min-height: 300px;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const Span = styled(Link)`
  margin: 0 5px;
  text-decoration: none;
  color: #004080;
  font-weight: 700;

  :hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  display: flex;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 0px;
  font-weight: 700;
  text-align: center;
`;

const Image = styled.img`
  height: 150px;
`;
const Error = styled.p`
  margin: 0;
  color: red;
  display: flex;
  justify-content: flex-end;
  width: 80%;
  font-size: 12px;
  margin-top: -15px;
  margin-right: 5px;
`;

const Blocker = styled.div`
  position: absolute;
  top: -3px;
  background-color: white;
  padding: 0 5px;
  font-size: 12px;
  left: 10px;
  color: #004080;
`;

const InputHolder = styled.div`
  position: relative;
  width: 90%;
  margin: 10px 0;
`;

const Button = styled.button<{ bg: string }>`
  outline: none;
  border: 0;
  text-align: center;
  margin: 10px;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  background-color: ${({ bg }) => bg};
  font-size: 15px;
  text-transform: uppercase;
  transition: all 350ms;
  margin-bottom: 20px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;