import { faker } from "@faker-js/faker";
import { create } from "zustand";
// Mock function to generate a single post
const generatePost = (id) => ({
  id: id.toString(),
  authorName: faker.person.fullName(),
  authorAvatar: faker.image.avatar(),
  timestamp: faker.date.recent().toLocaleDateString(),
  content: faker.lorem.paragraph(5),
  image: `https://picsum.photos/600/400?random=${id}`,
  likes: faker.number.int({ min: 10, max: 500 }),
});

// Generate 10 mock posts
const mockPosts = Array.from({ length: 10 }, (_, i) => generatePost(i + 1));

const useFeedStore = create((set) => ({
  feed: mockPosts,
  isFeedLoading: false,
  //   addToFeed: (newFeed) => set((state) => ({ feed: [newFeed, ...state.feed] })),
  addToFeed: async (newFeed) => {
    set({ isFeedLoading: true });
    await new Promise((resolve) => setTimeout(() => resolve(resolve), 2000));
    set((state) => ({ feed: [newFeed, ...state.feed], isFeedLoading: false }));
  },
  delFromFeed: (feedId) =>
    set((state) => ({ feed: state.feed.filter((feed) => feed.id !== feedId) })),
  updateFeed: (updatedFeed) =>
    set((state) => ({
      feed: state.feed.map((feed) =>
        feed.id === updatedFeed.id ? updatedFeed : feed,
      ),
    })),
  clearFeed: () => set({ feed: [] }),
}));

export default useFeedStore;
