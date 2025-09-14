// app/connect/loading.tsx
export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] grid place-items-center bg-white dark:bg-gray-950">
            <div className="flex flex-col items-center gap-4">
                {/* ring spinner */}
                <div className="relative h-12 w-12">
                    <span className="absolute inset-0 rounded-full border-4 border-cyan-600/20" />
                    <span className="absolute inset-0 rounded-full border-4 border-cyan-600 border-t-transparent animate-spin" />
                </div>

                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Loading…
                </p>
            </div>
        </div>
    );
}
