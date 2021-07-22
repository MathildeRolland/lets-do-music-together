import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './edito.scss';

const Edito = ({ title }) => {
  useEffect(
    () => {
      console.log('scroll');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  )
  
  return (
    <div className="edito">
      <h2 className="edito__title">{title}</h2>
      <div className="edito__container">
        <p className="edito__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at sem lectus. Sed quis enim id erat dictum gravida quis eu dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum eu ex commodo, aliquet justo ac, ullamcorper ante. Morbi vel dictum felis. In eget imperdiet justo, vel tristique risus. Vestibulum ac ante lorem. Mauris non enim ac odio sagittis sodales non vitae purus. Sed egestas dictum dui, ut pellentesque velit. Vestibulum massa diam, iaculis nec rhoncus quis, sollicitudin in nibh. In metus ex, rutrum in consequat fringilla, ultrices sed sapien.
        </p>
        <p className="edito__paragraph">
          Aliquam interdum commodo magna sed condimentum. Mauris luctus sapien quam, id faucibus ipsum aliquet eu. Pellentesque suscipit eget augue eget efficitur. Donec odio nisl, interdum et sagittis ac, finibus a erat. Maecenas in tincidunt nunc. Suspendisse nec urna non dolor laoreet convallis quis vel nulla. Donec risus ligula, aliquam vel porttitor sit amet, laoreet eget massa. Aenean commodo purus nec urna egestas pulvinar. Sed fringilla convallis nunc id consequat. Fusce dui quam, tempor vel gravida ac, aliquam eu diam. Sed posuere bibendum quam in euismod.
        </p>
        <p className="edito__paragraph">
          Quisque eu aliquam ligula. Vivamus a nisi rhoncus, consectetur risus nec, pulvinar enim. Nunc at elementum arcu. Phasellus non iaculis justo. Nam non iaculis sapien. Vestibulum nisl sem, dignissim nec libero nec, porta imperdiet risus. Nam pretium elit eget vehicula lobortis. Sed rutrum efficitur metus, et volutpat sem ultricies id. In risus eros, tempus non mi sit amet, suscipit tincidunt mi. Cras dignissim arcu sit amet maximus iaculis. Ut non ante et elit pellentesque convallis. Aenean tempus rutrum diam id pulvinar.
        </p>
        <p className="edito__paragraph">
          Etiam nulla tellus, porttitor quis ipsum eu, mollis hendrerit tortor. Vestibulum nibh turpis, pellentesque vitae vehicula nec, gravida vitae dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc blandit vehicula est in luctus. Phasellus ac pretium lectus. Nulla nec malesuada diam. Duis semper, ligula ut bibendum posuere, metus velit posuere enim, at molestie dui lectus at ex. Cras risus ante, tincidunt at dignissim quis, imperdiet ut odio. Maecenas ullamcorper libero lorem. Vestibulum ut vehicula massa. Praesent vitae leo et quam pulvinar volutpat. Aliquam feugiat malesuada justo, eget fringilla elit imperdiet ac. Aliquam imperdiet risus et neque porttitor, et semper odio congue. Nullam non placerat leo. Cras pellentesque hendrerit interdum. Suspendisse rutrum orci ut ipsum aliquet laoreet.
        </p>
        <p className="edito__paragraph">
          Maecenas sed dui ligula. Nullam sagittis, dui id ultricies vehicula, sapien diam fringilla erat, id porttitor magna felis et erat. Proin vitae pellentesque orci. Nulla mattis libero ac metus venenatis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus eros dui. Donec ac libero nulla. Morbi facilisis, sapien et feugiat vehicula, risus enim elementum nisi, in dignissim mauris justo quis justo. Suspendisse ultricies sem vel suscipit ornare. Nunc eget neque urna. Donec dignissim efficitur dui vel iaculis. Duis nec elementum risus. Quisque pretium nisl eu fringilla consequat. Curabitur nec tortor vel sapien blandit euismod. Nulla suscipit metus vel nibh congue tempor. Etiam id lobortis odio.
        </p>
        <p className="edito__paragraph">
          Sed nec pharetra tellus. Duis ornare euismod pellentesque. Morbi sed mauris risus. Donec tincidunt sit amet ipsum eu tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur eget feugiat ligula. Proin finibus ex eget rutrum pharetra. Duis accumsan orci quis eros posuere, ut scelerisque lorem tincidunt. Sed vestibulum interdum nibh non cursus. Proin aliquet fringilla arcu non convallis. Pellentesque feugiat gravida mi, eu varius nulla. Etiam ut tortor a lacus volutpat interdum in eget lacus. Nunc vel velit mattis, porttitor lorem non, interdum ante. Curabitur molestie eleifend risus, ac congue turpis varius non. Vivamus sollicitudin ullamcorper accumsan.
        </p>
        <p className="edito__paragraph">
          Morbi imperdiet egestas velit. Donec auctor, lorem et interdum maximus, justo nisl sollicitudin eros, non euismod nibh nibh at magna. In cursus fermentum est et vestibulum. Etiam eu pellentesque nulla. Ut sodales sit amet lectus at egestas. Integer tellus augue, hendrerit et magna et, consequat ultricies dui. Sed elit ipsum, euismod at pretium quis, pretium eget enim. Mauris odio velit, sodales et rhoncus dictum, rutrum ut lacus. Morbi in lacus at nunc lobortis consequat in luctus felis. Fusce eget nibh magna. Suspendisse in dui a tortor blandit accumsan. Morbi venenatis mauris diam, sed maximus sapien mattis sollicitudin. Nam gravida orci vel lectus luctus, ac tristique nibh lobortis. Nam quis velit cursus justo vehicula consequat at et nibh.
        </p>
      </div>
    </div>
  );
};

Edito.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Edito;