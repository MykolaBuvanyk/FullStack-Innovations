import React from 'react';
import styles from './NewsContent.module.css';

interface SpanItem {
  value: string;
}

interface ContentBlock {
  type: 'h2' | 'paragraph' | 'list' | 'image';
  value: string | (string | SpanItem)[];
  listType?: 'numbered' | 'bullet';
  alt?: string;
  number?: string; // Додаємо підтримку поля number
}

interface H2Props {
  value: string;
  number?: string;
}

interface SpanProps {
  value: string;
}

interface ParagraphProps {
  value: string | (string | SpanItem)[];
}

interface ListProps {
  value: string[];
  listType: 'numbered' | 'bullet';
}

interface ImageProps {
  value: string;
  alt: string;
}

interface NewsContentProps {
  content: ContentBlock[];
  title: string;
}

const H2: React.FC<H2Props> = ({ value, number }) => (
  <h2 className={styles.h2}>
    {number && <span className={styles.h2Number}>{number}</span>}
    {value}
  </h2>
);

const Span: React.FC<SpanProps> = ({ value }) => (
  <span className={styles.accent}>{value}</span>
);

const Paragraph: React.FC<ParagraphProps> = ({ value }) => (
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

const List: React.FC<ListProps> = ({ value, listType }) => {
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

const Image: React.FC<ImageProps> = ({ value, alt }) => (
  <img src={value} alt={alt} className={styles.image} />
);

const NewsContent: React.FC<NewsContentProps> = ({ content, title }) => {
  const imageBlock = content.find((block) => block.type === 'image');
  const otherBlocks = content.filter((block) => block.type !== 'image');

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {imageBlock && <Image value={imageBlock.value as string} alt={imageBlock.alt || ''} />}
        {title && <h1 className={styles.title}>{title}</h1>}
        {otherBlocks.map((block, index) => {
          switch (block.type) {
            case 'h2':
              return <H2 key={index} value={block.value as string} number={block.number} />;
            case 'paragraph':
              return <Paragraph key={index} value={block.value} />;
            case 'list':
              return <List key={index} value={block.value as string[]} listType={block.listType || 'bullet'} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default NewsContent;