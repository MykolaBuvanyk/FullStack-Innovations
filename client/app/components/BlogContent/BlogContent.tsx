'use client';

import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import styles from './BlogContent.module.css';
import blogPostsData from './blog.json';
import ButtonTop from '../ButtonTop/ButtonTop';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

type Props = {
  dictionary: any;
};

const POSTS_PER_PAGE = 6;

const BlogContent: React.FC<Props> = ({ dictionary }) => {
  const [blogPosts] = useState<BlogPost[]>(blogPostsData);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.blogContentWrapper}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <ul className={styles.blogList}>
            {paginatedPosts.map((post) => (
              <li key={post.id} className={styles.blogItem}>
                <img src={post.image} alt={post.title} />
                <div className={styles.blogItemTextWrapper}>
                  <h2>{post.title}</h2>
                  <p className={styles.truncatedDescription}>
                    {post.description}
                  </p>
                  <div className={styles.blogItemMeta}>
                    <p className={styles.date}>{post.date}</p>
                    <a href={"#"} className={styles.readMore}>
                      {dictionary.readMore}
                      <img src="/images/arrow_top_right.svg" alt="" />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
          <div className={styles.pagination}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`${styles.paginationButton} ${styles.prevButton} ${currentPage === 1 ? styles.disabled : styles.active}`}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <ul className={styles.pageNumbers}>
              {pageNumbers.map((page) => (
                <li
                  key={page}
                  className={`${styles.pageItem} ${currentPage === page ? styles.active : ""}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`${styles.paginationButton} ${styles.nextButton} ${currentPage === totalPages ? styles.disabled : styles.active}`}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
    </div>
  );
};

export default BlogContent;