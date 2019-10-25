import React from 'react';
import Results from "./Results";
import wiki from "./files/wiki.png";


class App extends React.Component{

  state = {
    title:"",
    description:"",
    link:"",
    data:undefined,
    error:""
  }

  handleSubmit = (e) => {
    e.preventDefault();    
    const userSearch = e.target.elements.userSearch.value;
    const url =`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${userSearch}&format=json&callback?`;
    

    if(userSearch !== ""){
      fetch(url)
        .then((data) => {
          return data.json()
        })
        .then(response => {
            this.setState({
              data:response,
              error:""
            })
        })
        .catch(error => {
          console.log(`"Something went wrong" ${error}`)
        })
    }else{
      this.setState({
        title:"",
        description:"",
        link:"",
        data:undefined,
        error:"Make sure the search field isn't empty"
      })
    }
    
  }

  render(){
    return (
      <div className="container-fluid">
        <h1 className="text-center display-3 font-weight-bold">Wikipedia Viewer -<i className="fa fa-wikipedia-w" aria-hidden="true"></i>-</h1>      
        <img src={wiki} className="wikiImg img-responsive mx-auto d-block" alt="Wiki"  />
  
        <form onSubmit={this.handleSubmit}>
          <div className="text-center " id="searchInfo">    
            <input name="userSearch" id="userSearch" type="text" placeholder="Search...." />
            <button className="btn btn-primary " ><i className="fa fa-search"></i></button>   
          </div>
        </form>

        <div className="container text-center" >
          {
            this.state.data !== undefined ?
              this.state.data[1].map((result,index)=> {
                // console.log(this.state.data[1].length)
                return <Results 
                          title= {this.state.data[1][index]} 
                          description={this.state.data[2][index]}
                          link={this.state.data[3][index]}
                          key={index}
                        />
              })
            : ""
          }   
          {<p>{this.state.error}</p>}    
              
        </div>
        <div className="text-center mt-5">
          <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer"><button type="submit">Random Wiki</button></a>
          <p>Made by <a href="https://lilnop.github.io/lilnop/" target="_blank" rel="noopener noreferrer"><span className="name">Robert Sarpong</span></a></p>
        </div>
  
      </div>
    );
  }
} 

  
export default App;