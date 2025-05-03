import React from 'react';
import styles from './NewsContent.module.css';

const H2 = ({ value }) => (
  <h2 className={styles.h2}>{value}</h2>
);

const Span = ({ value }) => (
  <span className={styles.accent}>{value}</span>
);

const Paragraph = ({ value }) => (
  <p className={styles.paragraph}>
    {Array.isArray(value) ? (
      value.map((item, index) =>
        typeof item === 'string' ? (
          <span key={index}>{item}</span>
        ) : (
          <Span key={index} value={item.value} />
        )
      )
    ) : (
      value
    )}
  </p>
);

const List = ({ value, listType }) => {
  const ListTag = listType === 'numbered' ? 'ol' : 'ul';
  const listClass = listType === 'numbered' ? styles.numberedList : styles.bulletList;

  return (
    <ListTag className={listClass}>
      {value.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ListTag>
  );
};

const Image = ({ value, alt }) => (
  <img src={value} alt={alt} className={styles.image} />
);

const NewsContent = ({ content, title }) => {
  const imageBlock = content.find((block) => block.type === 'image');
  const otherBlocks = content.filter((block) => block.type !== 'image');

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {imageBlock && <Image value={imageBlock.value} alt={imageBlock.alt} />}
        {title && <h1 className={styles.title}>{title}</h1>}
        {otherBlocks.map((block, index) => {
          switch (block.type) {
            case 'h2':
              return <H2 key={index} value={block.value} />;
            case 'paragraph':
              return <Paragraph key={index} value={block.value} />;
            case 'list':
              return <List key={index} value={block.value} listType={block.listType} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default NewsContent;