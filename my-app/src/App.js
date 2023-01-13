import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        person: {
            imgSrc: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/245985992_3165424303703649_634336307299395319_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z0V83ghHIbUAX_GDJBv&_nc_ht=scontent.ftun8-1.fna&oh=00_AfCaEW_ScQ0yTtdB_pG6rDtm2i6BWek-PrhrslxDEz-0Ww&oe=63C72973',
            fullName: 'Hasen Elghoul',
            bio: 'A Junior Web Developer',
            profession: 'Web Developer'
        },
        show: false
    };
}
componentDidMount() {
  this.interval = setInterval(() => {
      this.setState({
          time: (new Date() - this.state.mountedAt) / 1000
      });
  }, 1000);
}

render() {
  return (
      <div className='container'>
          <button className='btn' onClick={() => this.setState({ show: !this.state.show })}>
              {this.state.show ? 'Hide' : 'Show'}
          </button>
          {this.state.show && (
              <div className='person-card'>
                  <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
                  <p><span>Name: </span><br/>{this.state.person.fullName}</p>
                  <p><span>Bio: </span><br/>{this.state.person.bio}</p>
                  <p><span>Profession: </span><br/>{this.state.person.profession}</p>
              </div>
          )}
          <p><span>Time elapsed: </span>{this.state.time} seconds</p>
      </div>
  );
}


}

export default App;
