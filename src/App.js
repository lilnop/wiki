import React from 'react';
import Results from "./Results";
import wiki from "./files/wiki.png";


class App extends React.Component{

  state = {
    title:"",
    description:"",
    link:"",
    data:null
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const userSearch = e.target.elements.userSearch.value;
    const url =`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${userSearch}&format=json&callback?`;

    fetch(url)
    .then((data) => {
      return data.json()
    })
    .then(response => {
      this.setState({data:response})
    })
    .catch(error => {
      console.log(`"error" ${error}`)
    })
    


  }
 
  render(){
    return (
      <div className="container-fluid">
        <h1 className="text-center display-3 font-weight-bold">Wikipedia Viewer -<i className="fa fa-wikipedia-w" aria-hidden="true"></i>-</h1>      
        <img src={wiki} className="wikiImg img-responsive mx-auto d-block" alt="Wiki"  />
  
        <form onSubmit={this.handleSubmit}>
          <div className="text-center " id="searchInfo">    
            <input name="userSearch" id="userSearch" type="text" placeholder="Search..." />
            <button className="btn btn-primary " ><i className="fa fa-search"></i></button>
            
            <div className="container" >
              {this.state.data != null?
              this.state.data[1].map((data,i)=>{
                  return <Results title={this.state.data[1][i]} description={this.state.data[2][i]} link={this.state.data[3][i]} />
              }):null}
              
            </div>
    
          </div>
        </form>
      </div>
    );
  }
} 

export default App;
