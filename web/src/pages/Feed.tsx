import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  getFirestore,
  collection,
  query,
  limit,
  orderBy,
  startAfter,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore/lite";
// import { useVisible } from "@/hooks";
import { Button, Loading } from "@/lib";
import { getApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// import { useInfiniteQuery } from "react-query";
// import { useVirtual } from "react-virtual";
import { useSWRInfinite } from "swr";

export type Post = {
  id: string;
  media: {
    contentType: string;
    id: string;
    path: string;
    status: string;
    thumbnail: string;
    timestamp: string;
    uploadFinished: boolean;
    userId: string;
    web: string;
  };
  refId: string;
  timestamp: string;
  type: string;
  userId: string;
};

const firebaseApp = getApp();
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const NUM_POSTS = 12;

function fetcher(lastDoc: QueryDocumentSnapshot<Post>) {
  const queryParams = [orderBy("timestamp", "desc"), limit(NUM_POSTS)];
  if (lastDoc) queryParams.push(startAfter(lastDoc));
  return getDocs<Post>(query(collection(db, "posts"), ...queryParams)).then(
    ({ docs }) => docs
  );
}

function getKey(_idx: number, pageDocs: QueryDocumentSnapshot<Post>[] | null) {
  if (pageDocs === null || pageDocs.length < NUM_POSTS) return null;
  return pageDocs[pageDocs.length - 1];
}

function Post(): JSX.Element {
  return <div className="h-64 w-64 bg-purple-300">Post</div>;
}

export function Feed(): JSX.Element {
  const { data, error, size } = useSWRInfinite(getKey, fetcher, undefined);

  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  return (
    <>
      <div>
        {data.flat().map((post) => {
          if (post === undefined) return;
          const { id } = post.data();
          return <Post key={id} />;
        })}
      </div>
    </>
  );
}
