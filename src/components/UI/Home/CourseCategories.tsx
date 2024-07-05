import { Box, Stack, Typography } from "@mui/material";
import { useGetAllCategoryQuery } from "../../../redux/api/categoriesApi";
import Loading from "../../shared/Loading/Loading";
import SectionTitle from "../../shared/SectionTitle";
import { useEffect, useState } from "react";

const CourseCategories = () => {
   const { data, isLoading } = useGetAllCategoryQuery({
      query: [{ name: "subcategory", value: true }],
   });
   const categories = data?.data;

   const [tabValue, setTabValue] = useState("");

   useEffect(() => {
      if (categories) {
         setTabValue(categories[0]._id);
      }
   }, [categories]);

   return (
      <Box mb={10}>
         <SectionTitle title="Categories" />
         {isLoading ? (
            <Loading />
         ) : !categories ? (
            <Typography>No Have any categories</Typography>
         ) : (
            <Box>
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     flexWrap: "wrap",
                     gap: 5,
                  }}
               >
                  {categories.map((item) => (
                     <Stack
                        key={item._id}
                        alignItems="center"
                        gap={1}
                        p={1.5}
                        borderRadius={5}
                        onClick={() => setTabValue(item._id)}
                        sx={{
                           cursor: "pointer",
                           border: "2px solid white",
                           borderColor:
                              tabValue === item._id ? "secondary.main" : "",
                           opacity: 5,
                        }}
                     >
                        {item.image ? (
                           <Box
                              src={item?.image}
                              alt={item.name}
                              component="img"
                              sx={{
                                 width: 74,
                                 height: 74,
                              }}
                           />
                        ) : (
                           <Box
                              sx={{
                                 width: 70,
                                 height: 70,
                                 border: "2px solid",
                                 borderColor: "primary.main",
                                 borderRadius: 5,
                              }}
                           />
                        )}
                        <Typography
                           sx={{
                              fontSize: 16,
                              fontWeight: 600,
                           }}
                        >
                           {item.name}
                        </Typography>
                     </Stack>
                  ))}
               </Box>
               <Box
                  mt={5}
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     flexWrap: "wrap",
                     gap: 5,
                  }}
               >
                  {tabValue &&
                     categories
                        .find((item) => item._id === tabValue)
                        ?.subcategories?.map((item) => (
                           <Stack
                              key={item._id}
                              alignItems="center"
                              gap={1}
                           >
                              {item.image ? (
                                 <Box
                                    src={item?.image}
                                    alt={item.name}
                                    component="img"
                                    sx={{
                                       width: 74,
                                       height: 74,
                                    }}
                                 />
                              ) : (
                                 <Box
                                    sx={{
                                       width: 70,
                                       height: 70,
                                       border: "2px solid",
                                       borderColor: "primary.main",
                                       borderRadius: 5,
                                    }}
                                 />
                              )}
                              <Typography
                                 sx={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                 }}
                              >
                                 {item.name}
                              </Typography>
                           </Stack>
                        ))}
               </Box>
            </Box>
         )}
      </Box>
   );
};

export default CourseCategories;
