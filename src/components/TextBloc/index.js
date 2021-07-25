import React from 'react';
import PropTypes from 'prop-types';
 import { Editor } from '@tinymce/tinymce-react';

// Imports
import './textbloc.scss';
import './skins/ui/LCT/skin.css'

const TextBloc = ({ name, objectname, text, handleChange }) => {

return (
    <div>
            <Editor
                onEditorChange={(content) => { handleChange(content) }} 
                objectname={objectname}
                name={name}
                apiKey='yip33t8cal0zjyycfyc2y5pb8dyjs6bl4vecqdoyl8jj3f07'
                value={text}
                init={{
                menubar: false,
                plugins: [
                    'advlist autolink lists link charmap anchor'
                ],
                toolbar_location: 'bottom',
                toolbar: 'undo redo | ' +
                    'bold italic underline strikethrough | forecolor backcolor removeformat | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist | ' ,
                skin_url: '/src/components/TextBloc/skins/ui',
                skin: 'LCT',
                content_style:
                    "@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');",   
                icons: 'small',
            }}
        />
        

    </div>
)};

//Page.propTypes = {
//};

export default TextBloc;
