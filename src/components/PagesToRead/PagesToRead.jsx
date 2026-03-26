import { useLoaderData } from "react-router";
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const PagesToRead = () => {

    const allBooks = useLoaderData()

    //localstorage readlist
    const savedReadListId = localStorage.getItem('readlist');
    const parsedReadlistId = JSON.parse(savedReadListId) || [];

    const parsedReadList = allBooks.filter(
        book => parsedReadlistId?.includes(book.id))

    const readListChartData = parsedReadList.map(book => ({
        id: book.id,
        name: book.name,
        pages: book.number_of_pages
    }))

    console.log(readListChartData)

    //wishlist chart data

    //localstorage wishlist
    const savedWishListId = localStorage.getItem('wishlist');
    const parsedWishlistId = JSON.parse(savedWishListId) || [];

    const parsedWishList = allBooks.filter(
        book => parsedWishlistId?.includes(book.id))

    const wishListChartData = parsedWishList.map(book => ({
        id: book.id,
        name: book.name,
        pages: book.number_of_pages
    }))

    console.log(wishListChartData)


    //bar height calculation
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const Triangle = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    return (
        <div className="w-11/12 md:w-10/12 lg:w-10/12 my-12 md:my-24 flex flex-col mx-auto items-center gap-8">

            {
                readListChartData.length > 0 ?

                    <>

                        {/* readlist pages chart */}

                        <h1 className="text-xl font-bold">Number of pages in Readlist Books</h1>

                        <div className="w-full md:w-4/5 h-96 mb-6">
                            <ResponsiveContainer>
                                <BarChart
                                    data={readListChartData}
                                    margin={{ top: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="id" interval={0} fontSize={12} />
                                    <YAxis />

                                    {/* Custom Tooltip to show Name instead of ID */}
                                    <Tooltip
                                        cursor={{ fill: 'transparent' }}
                                        // 1. Format the data line (Value and Name)
                                        formatter={(value, name, props) => {
                                            // value is the 'pages', props.payload.name is the 'book name'
                                            return [
                                                `Pages: ${value}`,
                                                `Book: ${props.payload.name}`
                                            ];
                                        }}
                                        // 2. Format the top header (The ID)
                                        labelFormatter={(label) => `ID: ${label}`}
                                        // 3. Optional: Style the tooltip box to look cleaner
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                                    />

                                    <Bar
                                        dataKey="pages"
                                        shape={<Triangle />}
                                        label={{ position: 'top' }}
                                    >
                                        {readListChartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </>

                    :

                    <h1 className="text-xl font-bold">No book in readlist</h1>
            }

            {/* wishlist pages chart */}

            {
                wishListChartData.length > 0 ?

                    <>

                        {/* readlist pages chart */}

                        <h1 className="text-xl font-bold">Number of pages in Wishlist Books</h1>

                        <div className="w-full md:w-4/5 h-96 mb-6">
                            <ResponsiveContainer>
                                <BarChart
                                    data={wishListChartData}
                                    margin={{ top: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="id" interval={0} fontSize={12} />
                                    <YAxis />

                                    {/* Custom Tooltip to show Name instead of ID */}
                                    <Tooltip
                                        cursor={{ fill: 'transparent' }}
                                        // 1. Format the data line (Value and Name)
                                        formatter={(value, name, props) => {
                                            // value is the 'pages', props.payload.name is the 'book name'
                                            return [
                                                `Pages: ${value}`,
                                                `Book: ${props.payload.name}`
                                            ];
                                        }}
                                        // 2. Format the top header (The ID)
                                        labelFormatter={(label) => `ID: ${label}`}
                                        // 3. Optional: Style the tooltip box to look cleaner
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                                    />

                                    <Bar
                                        dataKey="pages"
                                        shape={<Triangle />}
                                        label={{ position: 'top' }}
                                    >
                                        {readListChartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </>

                    :

                    <h1 className="text-xl font-bold">No book in readlist</h1>
            }



        </div>
    );
};

export default PagesToRead;