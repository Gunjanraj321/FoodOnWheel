import { userData } from "../utils/constant";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Gunjan Kumar",
        location: "Hazaribagh",
        avatar_url:"https://avatars.githubusercontent.com"
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(userData);
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src="{avatar_url}" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: {login}</h3>
      </div>
    );
  }
}

export default UserClass;
