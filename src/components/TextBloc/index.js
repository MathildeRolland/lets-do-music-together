import React from 'react';
import PropTypes from 'prop-types';
 import { Editor } from '@tinymce/tinymce-react';

// Imports
import './textbloc.scss';
import '/src/assets/tinymce/skins/ui/LCT/skin.css'
//import './skins/ui/LCT/skin.css'

const TextBloc = ({ name, objectname, text, handleChange,handleBlur }) => {

return (
    <div>
            <Editor
                onEditorChange={(content) => { handleChange(content) }} 
                onBlur={handleBlur}
                objectname={objectname}
                name={name}
                apiKey='yip33t8cal0zjyycfyc2y5pb8dyjs6bl4vecqdoyl8jj3f07'
                value={text}
                init={{
                menubar: false,
                plugins: [
                    'advlist autolink lists link charmap anchor emoticons'
                ],
                toolbar_location: 'bottom',
                toolbar: 
                    'bold italic underline strikethrough | forecolor backcolor removeformat | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist | emoticons | undo redo' ,
                //skin_url: '/src/components/TextBloc/skins/ui',
                skin_url: '/src/assets/tinymce/skins/ui',
                skin: 'LCT',
                content_style:
                    "@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');",   
                icons: 'small',
                protocol: 'https',
            }}
        />
        

    </div>
)};

//Page.propTypes = {
//};

export default TextBloc;
