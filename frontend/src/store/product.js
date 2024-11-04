import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    
    setProducts: (products) => set({ products }),
    
    Add: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return { success: false, message: "Please fill in all fields." };
        }
        const res = await fetch("/api/v1/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();

        if (data.success) {
            set((state) => ({ products: [...state.products, data.data] }));
            return { success: true, message: "Product created successfully" };
        } else {
            return { success: false, message: data.message };
        }
    },

    fetchProducts: async () => {
        const res = await fetch("/api/v1/products");
        const data = await res.json();
        
        if (data.success) {
            set({ products: data.data });
        } else {
            console.error("Error fetching products:", data.message);
        }
    },

    Remove: async (pid) => {
        const res = await fetch(`/api/v1/products/${pid}`, {
            method: "DELETE",
        });
        const data = await res.json();
        
        if (data.success) {
            set((state) => ({
                products: state.products.filter((product) => product._id !== pid),
            }));
            return { success: true, message: data.message };
        } else {
            return { success: false, message: data.message };
        }
    },

    updateData: async (pid, updatedProduct) => {
        const res = await fetch(`/api/v1/products/${pid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        });
        const data = await res.json();

        if (data.success) {
            set((state) => ({
                products: state.products.map((product) => (product._id === pid ? data.data : product)),
            }));
            return { success: true, message: data.message };
        } else {
            return { success: false, message: data.message };
        }
    },
}));
