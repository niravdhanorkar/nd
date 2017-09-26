//importing
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { uploadImageData } from '../actions';


class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' };
  }
//call when file upload
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {
    //after getting image, i will redirect to next step
    if (this.props.signup.image !== "") {
      this.props.history.push("/showallinfo");
    }

    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img alt='image' ref='img_file' src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className='row'>
        <h2>Image Upload</h2>
        <input className="fileInput"
          type="file" ref='img_file'
          onChange={(e) => this._handleImageChange(e)} />

        <Button
          bsStyle='primary'
          onClick={() => this.props.uploadImageData("image_1")}
        //onClick={() => this.props.uploadImageData(this.state.imagePreviewUrl)}
        >Save and Next &gt;&gt; </Button>

        <div className="imgPreview">
          {$imagePreview}
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    signup: state.signup
  }
}
export default connect(mapStateToProps, { uploadImageData })(ImageUpload);