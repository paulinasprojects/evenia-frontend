import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from './input-field';
import accountSettingsImage from '/account-settings-image.png';
import "@/styles/account-settings.scss";


const schema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string().min(8, { message: "Password mus be at least 8 characters long." }),
});

const ProfileSetting = () => {
  const {register, handleSubmit, formState: { errors }} = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    console.log(values);
  };


  return (
    <div>
      <div className="account-settings-title-container">
        <h1 className="account-settings-title">Account Settings</h1>
      </div>
      <div className="account-settings-container">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="account-settings-profile-container">
          <img src={accountSettingsImage} alt="" className="account-settings-image" />
          <div className="account-settings-profile-picture-container">
            <span className="profile-picture-title">Profile Picture</span>
            <span className="file-format">File format (PNG, JPEG, SVG)</span>
            <label htmlFor="inputField" className="change-profile-picture-button">Change Profile Picture</label>
            <input type="file" className="file-button" title=" " style={{display: "none"}} id="inputField" />
          </div>
        </div>
        <div className="username-container">
          <div className="username-title">
            <span className="username">Username</span>
            <span className="change-username">Change your username</span>
          </div>
          <InputField
            placeholer="Username"
            name="username"
            register={register}
            error={errors?.username}
          />
        </div>
        <div className="username-container">
          <div className="username-title">
            <span className="username">Email</span>
            <span className="change-username">Change your email</span>
          </div>
          <InputField
            placeholer="Email"
            name="email"
            register={register}
            error={errors?.email}
          />
        </div>
        <div className="username-container">
          <div className="username-title">
            <span className="username">Password</span>
            <span className="change-username">Change your password</span>
          </div>
          <InputField
            placeholer="Password"
            name="password"
            register={register}
            error={errors?.password}
          />
        </div>
        <div className="account-settings-button-container">
          <button type="submit" className="save-button">Save</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileSetting